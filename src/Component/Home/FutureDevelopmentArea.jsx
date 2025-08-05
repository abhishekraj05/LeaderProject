// FutureDevelopmentArea.jsx
import React from 'react';
import Economy from "../../assets/Economy.png"
import EconomyImg from "../../assets/EconomyImg.jpg"
import Agriculture from "../../assets/Agriculture.png"
import AgricultureImg from "../../assets/AgricultureImg.jpg"
import Water from "../../assets/Water.png"
import WaterImg from "../../assets/WaterImg.jpg"
import Education from "../../assets/Education.png"
import EducationImg from "../../assets/EducationImg.jpg"
import Health from "../../assets/Health.png"
import HealthImg from "../../assets/HealthImg.jpg"
import Electricity from "../../assets/Electricity.png"
import Electricityimg from "../../assets/ElectricityImg.jpg"
import  './FutureDevelopmentArea.css';

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
      title: 'अर्थव्यवस्था',
      image: EconomyImg,
      icon: Economy,
      description:
        'ज़रूरत से ज़्यादा कर लगाना चोरी है। एक जटिल कर व्यवस्था इस चोरी को आसान बनाने के लिए एक बेहतरीन आवरण है और इसे हम पर थोपा गया है...'
    },
    {
      title: 'कृषि',
      image: AgricultureImg,
      icon: Agriculture,
      description:
        'उत्पादन लागत पर न्यूनतम 50% लाभ सुनिश्चित करके, सस्ती कृषि इनपुट उपलब्ध कराकर कृषि में लाभप्रदता बढ़ाने के लिए कदम उठाएं...'
    },
    {
      title: 'पानी',
      image: WaterImg,
      icon:Water ,
      description:
        'वर्षा आधारित क्षेत्रों में भूमि विकास और किसानों की आय बढ़ाने तथा आरओ संयंत्र उपलब्ध कराने के लिए प्रति वर्ष एक बड़ी राशि निर्धारित की जाएगी।'
    },
    {
      title: 'शिक्षा',
      image: EducationImg,
      icon: Education,
      description:
        'वैज्ञानिक स्वभाव को आत्मसात करके जटिल आधुनिक विश्व की चुनौतियों से निपटने के लिए एक कुशल युवा को तैयार करना...'
    },
    {
      title: 'स्वास्थ्य',
      image: HealthImg,
      icon: Health,
      description:
        'निजी-सार्वजनिक योजना के तहत हर अस्पताल में गरीबों के लिए सीटी स्कैन, एमआरआई और अल्ट्रासाउंड सुविधाओं के साथ 24 घंटे मुफ्त डायग्नोस्टिक सेंटर चलाए जाएंगे।'
    },
    {
      title: 'बिजली',
      image: Electricityimg,
      icon: Electricity,
      description:
        'हमारे घोषणापत्र में शहरी क्षेत्रों में ऊर्जा की पहुँच को 100 प्रतिशत और ग्रामीण क्षेत्रों में 90 प्रतिशत तक बढ़ाने का वादा किया गया है। वर्तमान में, 94 प्रतिशत...'
    }
  ];

  return (
    <section className="future-container">
      <h2>
        भविष्य का <span >विकास क्षेत्र</span>
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
