import './Main.css';
import Hornedbeasts from "../Hornedbeasts/Hornedbeasts"

  export default function Main({ data, handleModal }) {
    return (
      <main>
       
      
        {data.map((beast, key) => {
          return (
            <Hornedbeasts
              key={beast._id}
              beastObject={beast}
              title={beast.title}
              imgUrl={beast.image_url}
              description={beast.description}
              handleModal={handleModal}
            />
          );
        })}
      </main>
    );
  }