/* Baloncukları oluşturuyoruz */


document.addEventListener ("DOMContentLoaded", () => {
    
    const ring = document.querySelector(".energy-ring");
    if(!ring) {
        console.error("HATA: .energy-ring bulunamadı. HTML'de <div class ='energy-ring'></div> var mı?");
        return;
    }

    const bubbles = [
        {
            icon: "sun.svg",
            title: "Erişilebilir ve Temiz Enerji Nedir?",
            href: "#"
        },
        {
            icon: "pompa.svg",
            title: "Dünyada Temiz Enerji için alınması gereken önlemler",
            href: "#"
        },
        {
            icon: "panel.svg",
            title: "Yeni Yapılarda Enerji Tasarrufu",
            href: "#"
        },
        {
            icon: "tarim.svg",
            title: "Evlerimizde Enerji Tasarrufu",
            href: "#"
        },
        {
            icon: "geridonusum.svg",
            title: "Ger Dönüşüm ve Sürdürülebilirlik",
            href: "#"
        },
        {
            icon: "ekip.svg",
            title: "Proje Ekibi",
            href: "#"
        },
        {
            icon: "wind.svg",
            title: "Gelecek Hayalim Kimdir?",
            href: "#"
        },
    ];

    /* Daire Düzeni */
    const ringRect = ring.getBoundingClientRect();
    const centerX = ringRect.width / 2;
    const centerY = ringRect.height / 2;

    const radius = Math.min(centerX, centerY) -45;

    const bubbleSize = 64;
    const bubbleHalf = bubbleSize / 2;

    bubbles.forEach((item, index) => {
        const angle = (index / bubbles.length) * (2 * Math.PI) - Math.PI / 2;

        const x = centerX + radius * Math.cos(angle) -bubbleHalf;
        const y = centerY + radius * Math.sin(angle) -bubbleHalf;

        const bubble = document.createElement("a");
        bubble.className = "energy-bubble";
        bubble.href = item.href;
        bubble.title = item.title;
        bubble.setAttribute("aria-label", item.title);

        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;

        const img = document.createElement("img");
        img.src = `../icons/${item.icon}`;
        img.alt = item.title;

        bubble.appendChild(img);
        ring.appendChild(bubble);
    });
    console.log("BAlonsuklar üretildi", bubbles.length);
})