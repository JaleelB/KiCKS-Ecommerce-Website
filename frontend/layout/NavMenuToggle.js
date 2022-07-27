import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="white"
    strokeWidth="2"
    strokeLinecap="round"
    stroke="white"
    {...props}
  />
);

export const NavMenuToggle = ({ toggle, toggleValue, color }) => (

    
    <button 
        onClick={toggle} 
        style={{position: 'absolute'}}
    >
    <svg width="10" height="10" viewBox="0 0 23 23">
      <Path
        // stroke={
        //     !toggleValue && color === "white" ? "white": 
        //     !toggleValue && color === "black" ? "black":
        //     toggleValue && color === "white" ? 'black':
        //     'black'
        // }
        stroke={
            !toggleValue ? "white" : "black"
        }
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        stroke={
            !toggleValue && color === "white" ? "white": 
            !toggleValue && color === "black" ? "black":
            toggleValue && color === "white" ? 'black':
            'black'
        }
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        stroke={
            !toggleValue && color === "white" ? "white": 
            !toggleValue && color === "black" ? "black":
            toggleValue && color === "white" ? 'black':
            'black'
        }
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);