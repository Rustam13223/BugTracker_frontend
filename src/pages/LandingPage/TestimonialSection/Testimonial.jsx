import styles from "./TestimonialSection.module.css";

/**
 * Renders a testimonial component.
 *
 * @component
 * @param {Object} testimonial - The testimonial object.
 * @param {string} testimonial.image - The image URL for the testimonial.
 * @param {string} testimonial.name - The name of the person giving the testimonial.
 * @param {string} testimonial.content - The content of the testimonial.
 * @returns {JSX.Element} The rendered testimonial component.
 */
const Testimonial = ({ testimonial }) => {
  return (
    <div className={styles.testimonial}>
      <img src={testimonial.image} alt={testimonial.name} />
      <h1 className={styles.name}>{testimonial.name}</h1>
      <p className={styles.content}>{testimonial.content}</p>
    </div>
  );
};

export default Testimonial;
