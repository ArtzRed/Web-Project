document.addEventListener("DOMContentLoaded", () => {
    tsParticles.load("space-bg", {
        background: { color: "#020617" },
        fpsLimit: 60, 
        particles: {
            number: { value: 120 },
            color: { value: ["#ffffff", "#a3cfff", "#7a5cff"] },
            shape: { type: "circle" },
            opacity: { value: { min: 0.3, max: 0.8 } },
            size: { value: { min: 1, max: 2.5 } },
            move: {
                enable: true,
                speed: 0.2,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" }, 
            },
        },
        detectRetina: true,
    });
});