

// components/BeautyRoutineCard.js

import Image from 'next/image';

const DisplayCategoryCard = ({ items }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Level up your beauty routine</h2>
      <div style={styles.grid}>
        {items.map((item, index) => (
          <div key={index} style={styles.item}>
            <Image src={item.image} alt={item.name} width={100} height={100} />
            <p style={styles.text}>{item.name}</p>
          </div>
        ))}
      </div>
      <a href="#" style={styles.link}>See more</a>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #e1e1e1',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    maxWidth: '300px',
    margin: '0 auto',
  },
  title: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
  },
  item: {
    textAlign: 'center',
  },
  text: {
    marginTop: '10px',
    fontSize: '14px',
  },
  link: {
    marginTop: '20px',
    display: 'block',
    textAlign: 'center',
    color: '#0070f3',
    textDecoration: 'none',
  },
};

export default DisplayCategoryCard;
