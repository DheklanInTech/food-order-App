import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Cake, Delivered To You</h2>
      <p>
        Choose your favorite cake from our broad selection of available cakes
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our cakes are baked with high-quality ingredients, just-in-time and
        of course by experience bakers
      </p>
    </section>
  );
};

export default MealsSummary;
