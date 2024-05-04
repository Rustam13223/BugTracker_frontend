import styles from "./TestimonialSection.module.css";

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
