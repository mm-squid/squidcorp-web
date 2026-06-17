# Squid Corp. — web

Jednoduchá jednostránková prezentace (CZ/EN) pro **Squid Corp. s.r.o.**
Statický web bez build nástroje — čisté HTML, CSS a kousek JavaScriptu. Žádné závislosti,
žádné cookies, žádný tracking.

## Soubory
- `index.html` — obsah stránky (obě jazykové verze).
- `styles.css` — vzhled (barvy odvozené z loga: korálová růžová + nebesky modrá).
- `app.js` — přepínač jazyka CZ/EN (volba se pamatuje v prohlížeči).
- `assets/logo.png`, `assets/favicon*.png` — logo chobotnice (z faktury).
- `assets/marek.jpg` — **portrét — zatím placeholder, vyměň za vlastní fotku** (stejný název souboru).
- `CNAME` — custom doména pro GitHub Pages (`squidcorp.eu`).
- `.nojekyll` — vypne Jekyll na GitHub Pages.

## Co je potřeba doplnit
1. **Fotka:** přepiš `assets/marek.jpg` svým portrétem (doporučeno: neutrální šedé pozadí).
2. **Text služeb:** v `index.html` uprav odstavce v sekci `#about` (atributy `data-cs` a `data-en`).
   Placeholder odstavec (`placeholder-note`) pak smaž.

## Lokální náhled
Otevři `index.html` v prohlížeči, nebo spusť jednoduchý server:
```
python -m http.server 8000
```
a otevři http://localhost:8000

## Nasazení na GitHub Pages (zdarma)
1. Založ si účet na https://github.com (zdarma).
2. Vytvoř **veřejný** repozitář, např. `squidcorp-web`.
3. Nahraj do něj obsah této složky (včetně `CNAME` a `.nojekyll`).
4. **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, složka `/ (root)`, ulož.
5. Do pole **Custom domain** zadej `squidcorp.eu` (soubor `CNAME` to nastaví automaticky).
6. Po propagaci DNS zaškrtni **Enforce HTTPS** (certifikát vystaví GitHub sám).

## DNS u Forpsi — POUZE PŘIDAT (mailu se nedotýkat!)
Mail běží na Microsoft 365 — záznamy MX / SPF (TXT) / `autodiscover` / DKIM
(`selector1._domainkey`, `selector2._domainkey`) a ověřovací TXT **nech beze změny**.
Přidej jen tyto webové záznamy:

Apex doména `squidcorp.eu` — 4 A záznamy na IP GitHub Pages:
```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```
(volitelně IPv6 — AAAA `@`): `2606:50c0:8000::153`, `2606:50c0:8001::153`,
`2606:50c0:8002::153`, `2606:50c0:8003::153`

Subdoména `www`:
```
CNAME   www   <tvuj-github-username>.github.io.
```
(za `<tvuj-github-username>` dosaď své uživatelské jméno z GitHubu)

## Ověření po nasazení
- https://squidcorp.eu a https://www.squidcorp.eu se načtou s platným HTTPS.
- Přepínač CZ/EN funguje, odkaz na e-mail otevře poštu.
- Testovací e-mail na/z `marek.matejka@squidcorp.eu` chodí (M365 beze změny).
