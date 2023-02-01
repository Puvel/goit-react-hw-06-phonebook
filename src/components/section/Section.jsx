import PropTypes from 'prop-types';
import css from './section.module.css';

export const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2 className={css.sectionTitle}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
