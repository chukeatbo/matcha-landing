# T-Cat Matcha House — Landing Page

Landing page ร้านมัทฉะธีมแมว (ねこや) สร้างด้วย **SvelteKit + Tailwind CSS + shadcn-svelte**
รันเป็น Node server ผ่าน `adapter-node`, แพ็กเป็น Docker image, และมี **Nginx**
เป็น reverse proxy อยู่หน้าสุด

## Tech stack

- SvelteKit 2 (Svelte 4) + TypeScript
- Tailwind CSS + shadcn-svelte (Button / Card / Badge เป็นตัวอย่างเริ่มต้น)
- `@sveltejs/adapter-node` → build ออกมาเป็น Node server (`node build`)
- Docker (multi-stage build) + Docker Compose
- Nginx (reverse proxy, gzip, static asset caching)

## โครงสร้างที่สำคัญ

```
src/lib/components/ui/      shadcn-svelte primitives (button, card, badge)
src/lib/components/         ส่วนต่าง ๆ ของหน้า landing (hero, menu, about, ...)
src/routes/+page.svelte     ประกอบหน้า landing page
src/routes/healthz/         health check endpoint สำหรับ docker/nginx
Dockerfile                  multi-stage build → runtime image
docker-compose.yml          app (Node) + nginx
nginx/nginx.conf            reverse proxy config
```

## รันตอน dev

เครื่องนี้ติดตั้ง **Node.js LTS** และ **Docker Desktop** ไว้ให้แล้วผ่าน winget

```bash
npm install
npm run dev
```

Docker Desktop ยังต้องทำอีก 1 ขั้นก่อนใช้งานได้ (ดูหัวข้อ "การติดตั้งบนเครื่องนี้"
ด้านล่าง) — เปิด WSL2 backend ซึ่งต้องรันคำสั่งด้วยสิทธิ์ Administrator แล้ว
รีสตาร์ทเครื่องหนึ่งครั้ง

## การติดตั้งบนเครื่องนี้ (Windows)

ติดตั้งให้แล้วผ่าน `winget`:

- **Node.js LTS** (v24) — ใช้งานได้ทันที (`npm install`, `npm run dev`, `npm run build`)
- **Docker Desktop** (CLI ใช้งานได้แล้ว) — แต่ Docker engine ต้องมี **WSL2**
  เป็น backend ซึ่งเครื่องนี้ยังไม่ได้เปิดใช้งาน Windows feature ดังกล่าว
  (ต้องใช้สิทธิ์ Administrator ซึ่ง agent รันแบบไม่ elevated จึงเปิดให้ไม่ได้
  อัตโนมัติ)

**ขั้นตอนที่เหลือ (ทำครั้งเดียว) เพื่อให้ `docker compose up` ใช้งานได้จริง:**

1. เปิด **PowerShell แบบ Run as Administrator**
2. รัน:
   ```powershell
   wsl --install
   ```
3. **รีสตาร์ทเครื่อง** 1 ครั้ง
4. เปิดโปรแกรม **Docker Desktop** จาก Start menu ครั้งแรก เพื่อ complete setup
   (กด accept license, รอ engine start จนสถานะเป็น "Running")
5. หลังจากนั้นกลับมารัน `docker compose build && docker compose up -d`
   ในโฟลเดอร์โปรเจกต์นี้ได้ตามปกติ

ระหว่างที่ยังไม่ได้เปิด WSL2 คุณยังพัฒนาและทดสอบหน้าเว็บได้ปกติผ่าน
`npm run dev` (ไม่ต้องพึ่ง Docker เลย) — Docker จำเป็นเฉพาะตอนอยาก build
image จริงเพื่อ deploy

## Build & รันด้วย Docker (แนะนำ)

```bash
docker compose build
docker compose up -d
```

เข้าเว็บได้ที่ `http://<server-ip>` (Nginx ฟัง port 80 แล้วส่งต่อไปที่ app
container บน port 3000 ภายใน network เดียวกัน)

ตรวจสุขภาพ container:

```bash
curl http://localhost/healthz
```

### แก้ก่อน deploy จริง

1. `docker-compose.yml` → เปลี่ยน `ORIGIN=https://your-domain.com` เป็นโดเมนจริง
   (SvelteKit ต้องรู้ origin จริงเวลาอยู่หลัง reverse proxy)
2. `nginx/nginx.conf` → เปลี่ยน `server_name your-domain.com www.your-domain.com`
   เป็นโดเมนจริง

## Deploy ขึ้น DigitalOcean

1. สร้าง Droplet (ดูคำแนะนำ spec ด้านล่าง) เลือก image **Docker on Ubuntu**
   จาก Marketplace ได้เลย (มี Docker + Docker Compose plugin ติดตั้งมาให้)
2. ชี้ DNS ของโดเมนมาที่ IP ของ droplet (A record)
3. SSH เข้า droplet แล้ว clone repo นี้ / หรือ `scp` ไฟล์ขึ้นไป
4. แก้ `ORIGIN` และ `server_name` ตามข้อด้านบน
5. รัน:
   ```bash
   docker compose up -d --build
   ```
6. ทำ HTTPS ด้วย Let's Encrypt — วิธีที่ง่ายที่สุดคือรัน certbot บนโฮสต์
   (ไม่ต้องอยู่ใน container ก็ได้) แล้วให้ nginx container mount certs:
   ```bash
   sudo apt install certbot
   sudo certbot certonly --standalone -d your-domain.com -d www.your-domain.com
   ```
   แล้วแก้ `docker-compose.yml` ให้ mount `/etc/letsencrypt` เข้าไปที่
   `./nginx/certs`, เปิด comment บล็อก `443` ใน `nginx/nginx.conf`, และเปิด
   port `443:443` ใน compose file
7. (แนะนำ) ตั้ง `ufw allow 80,443/tcp` และปิด port อื่นที่ไม่ใช้

Build image เกิดขึ้น "ในเครื่อง" droplet ทุกครั้งที่รัน `--build` — ถ้าอยาก
ให้ droplet เบาลง ให้ build image ใน GitHub Actions แล้ว push ขึ้น
DigitalOcean Container Registry หรือ Docker Hub แทน แล้วบน droplet แค่
`docker compose pull && docker compose up -d`

## แนะนำ Droplet

สำหรับ landing page ร้านเดียว (ไม่ใช่แอปที่มี backend หนัก ๆ) ที่รัน
Node SSR (adapter-node) + Nginx ผ่าน Docker:

| Tier | Spec | เหมาะกับ |
|---|---|---|
| Basic $6/mo | 1 vCPU, 1GB RAM, 25GB SSD | รันได้ แต่ตึงถ้า build image บน droplet เอง (Vite build ใช้ RAM พุ่งได้ถึง ~700MB–1GB ช่วง build) เสี่ยง OOM หรือค้าง ต้องเสริม swap |
| **Basic $12/mo (แนะนำ)** | **1 vCPU, 2GB RAM, 50GB SSD** | จุดที่คุ้มที่สุด — build image บน droplet ได้สบาย, รัน Node + Nginx พร้อมมีพื้นที่เหลือรองรับทราฟฟิกทั่วไปของร้าน (หลักร้อย–พันคนต่อวัน) |
| Basic $18/mo | 2 vCPU, 2GB RAM, 60GB SSD | ถ้าคาดว่าจะมีทราฟฟิกพุ่งช่วงโปรโมชัน หรืออยากมี CPU สำรองสำหรับ SSR concurrent requests เยอะขึ้น |

**สรุป: เริ่มที่ Basic Droplet $12/mo (1 vCPU / 2GB RAM / 50GB SSD)** เพียงพอ
สำหรับ landing page ร้าน T-Cat Matcha House ทั้งฝั่ง build และรันจริง ถ้าจะประหยัดกว่านี้
(ลงไปที่ $6/mo, 1GB RAM) แนะนำให้ **build image ที่อื่น** (CI หรือเครื่อง
local) แล้ว push เข้า registry ให้ droplet แค่ pull มารัน จะได้ไม่ต้องเผื่อ
RAM สำหรับขั้นตอน build เอง เว็บ landing page เพียงหน้าเดียวแบบนี้แทบไม่กิน
CPU/RAM ตอน runtime อยู่แล้ว ค่อยขยับไป $18/$24 ทีหลังได้ถ้าทราฟฟิกโตจริง
(DigitalOcean resize droplet ได้ภายหลังโดยไม่ต้องสร้างใหม่)

หมายเหตุ: ถ้าเนื้อหาแทบทั้งหมดเป็น static (เมนู, รีวิว ไม่ได้ query ฐานข้อมูล
แบบ real-time) พิจารณาเปิด `export const prerender = true` ในหน้า
`+page.svelte` เพื่อให้ SvelteKit generate เป็น static HTML ตอน build — ลด
ภาระ CPU/RAM ตอน runtime ลงไปอีก ทำให้แม้แต่ droplet $6/mo ก็รันสบายมาก
