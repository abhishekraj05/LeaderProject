// FutureDevelopmentArea.jsx
import React from 'react';
import './FutureDevelopmentArea.css';

const Card = ({ image, icon, title, description }) => {
  return (
    <div className="future-card">
      <img src={image} alt={title} className="future-image" />
      <div className="future-icon">
        <img src={icon} alt="icon" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="future-button">और देखें ⟶</button>
    </div>
  );
};

const FutureDevelopmentArea = () => {
  const data = [
    {
      title: 'आर्थिक विकास',
      image: 'https://i.imgur.com/0OZniRa.jpg',
      icon: 'https://i.imgur.com/Nzh2abG.png',
      description:
        'अत्यधिक कर चोरी है। जटिल कर प्रणाली इस चोरी को छुपाने के लिए एक आदर्श परदा बन जाती है।'
    },
    {
      title: 'कृषि',
      image: 'https://i.imgur.com/8OKlSNJ.jpg',
      icon: 'https://i.imgur.com/jXZOhPe.png',
      description:
        '50% लाभ सुनिश्चित करके कृषि में लाभप्रदता बढ़ाने के लिए कदम उठाए जाएंगे, साथ ही सस्ती इनपुट सुविधा भी दी जाएगी।'
    },
    {
      title: 'पेयजल',
      image: 'https://i.imgur.com/06IyfY5.jpg',
      icon: 'https://i.imgur.com/QgtYdmq.png',
      description:
        'बारिश आधारित क्षेत्रों में विकास और किसानों की आय बढ़ाने के लिए एक बड़ी राशि आरक्षित की जाएगी।'
    },
    {
      title: 'शिक्षा',
      image: 'https://i.imgur.com/6PRPbhn.jpg',
      icon: 'https://i.imgur.com/Sdk0KvG.png',
      description:
        'आज की जटिल दुनिया की चुनौतियों से निपटने के लिए वैज्ञानिक दृष्टिकोण के साथ योग्य युवाओं को तैयार करना।'
    },
    {
      title: 'स्वास्थ्य',
      image: 'https://i.imgur.com/sRPoHZU.jpg',
      icon: 'https://i.imgur.com/zrEz9ne.png',
      description:
        'गरीबों के लिए CT स्कैन, MRI और अल्ट्रासाउंड जैसी सेवाओं के साथ 24x7 मुफ्त डायग्नोस्टिक केंद्र उपलब्ध कराए जाएंगे।'
    },
    {
      title: 'बिजली',
      image: 'https://i.imgur.com/BGy7jRv.jpg',
      icon: 'https://i.imgur.com/JzJ4jFf.png',
      description:
        'हमारा वादा है कि शहरी क्षेत्रों में 100% और ग्रामीण क्षेत्रों में 90% तक बिजली की पहुंच बढ़ाई जाएगी।'
    }
  ];

  return (
    <section className="future-container">
      <h2>
        भविष्य का <span>विकास क्षेत्र</span>
      </h2>
      <div className="future-grid">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default FutureDevelopmentArea;
