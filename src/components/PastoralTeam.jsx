import React, { useState } from 'react';
import './PastoralTeam.css';

// Importando imagens
import pastorImage1 from '../assets/pastor.png';
import pastorImage2 from '../assets/pastora2.png';
import pastorImage3 from '../assets/pastor3.png';
import pastorImage4 from '../assets/NCIcon.png';

const pastors = [
  { id: 1, name: 'Pedro Fernandes', imageUrl: pastorImage1 },
  { id: 2, name: 'Jeanne Costa', imageUrl: pastorImage2 },
  { id: 3, name: 'Joaquim Barbosa', imageUrl: pastorImage3 },
  { id: 4, name: 'Edivan', imageUrl: pastorImage4 }
];

const PastoralTeam = () => {
  const [hoveredPastor, setHoveredPastor] = useState(null);

  return (
    <div className="pastoral-team">
      <h2>Equipe Pastoral</h2>
      <div className="pastors-container">
        {pastors.map(pastor => (
          <div 
            key={pastor.id} 
            className="pastor-item"
            onMouseEnter={() => setHoveredPastor(pastor.id)}
            onMouseLeave={() => setHoveredPastor(null)}
            onClick={() => setHoveredPastor(pastor.id)}
          >
            <img 
              src={pastor.imageUrl} 
              alt={pastor.name} 
              className="pastor-image"
              style={{ borderRadius: '50%' }}
            />
            {hoveredPastor === pastor.id && (
              <div className="pastor-name">
                {pastor.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastoralTeam;
