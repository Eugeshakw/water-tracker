import css from './WhyDrinkWater.module.css';

const WhyDrinkWater = function () {
  return (
    <div className={css.divWhyDrinkWater}>
      <h2 className={css.headerWhyDrinkWater}>Why drink water</h2>
      <ul>
        <li className={css.itemWhyDrinkWater}>
          Supply of nutrients to all organs
        </li>
        <li className={css.itemWhyDrinkWater}>Providing oxygen to the lungs</li>
        <li className={css.itemWhyDrinkWater}>
          Maintaining the work of the heart
        </li>
        <li className={css.itemWhyDrinkWater}>
          Release of processed substances
        </li>
        <li className={css.itemWhyDrinkWater}>
          Ensuring the stability of the internal environment
        </li>
        <li className={css.itemWhyDrinkWater}>
          Maintaining within the normal temperature
        </li>
        <li className={css.itemWhyDrinkWater}>
          Maintaining an immune system capable of resisting disease
        </li>
      </ul>
    </div>
  );
};

export default WhyDrinkWater;
