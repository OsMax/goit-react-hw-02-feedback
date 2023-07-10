import css from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={css.sectionContainer}>
    <h2>{title}</h2>
    {children}
  </div>
);

export default Section;
