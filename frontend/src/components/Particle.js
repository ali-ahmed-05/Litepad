
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle(){

    
  const particlesInit = async (main) => {
    // console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

    return(
        <>

    <Particles
      style={{ position: "absolute"}}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#262831",
          },
        },
        fpsLimit: 300,
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 3,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />

    </>
    )

}

export default Particle