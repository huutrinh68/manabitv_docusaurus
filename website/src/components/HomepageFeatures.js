import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'ManabiTV',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Manabi trong tiếng Nhật có nghĩa là học, khi không còn ngồi trong ghế nhà trường nữa đi ra ngoài đời làm việc kiếm tiền chúng ta cũng phải không ngừng học hỏi. 
      </>
    ),
  },
  {
    title: 'Practice makes perfect',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Từ lý thuyết đến thực tiễn là một quá trình rất dài. Blog này mình muốn hướng các bạn vào thực hành cùng với việc đưa ra giải thích các lý thuyết.
      </>
    ),
  },
  {
    title: 'AI Enginer',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Mình sẽ xây dựng một lộ trình học lập trình để các bản có thể trở thành một AI Engineer. Bắt đầu từ những kiến thức cơ bản đến nâng cao.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
