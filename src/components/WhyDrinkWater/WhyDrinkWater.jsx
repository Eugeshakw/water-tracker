import css from './WhyDrinkWater.module.css';
import img from '../WhyDrinkWater/icons/marker_item.svg';

const WhyDrinkWater = function () {
  return (
    <div className={css.divWhyDrinkWater}>
      <h2 className={css.headerWhyDrinkWater}>Why drink water</h2>
      <ul>
        <li className={css.itemOfListWhyDrinkWater}>
          <img className={css.imgIcon} src={img} alt="icon item" />
          <p className={css.itemWhyDrinkWater}>
            Supply of nutrients to all organs
          </p>
        </li>
        <li className={css.itemOfListWhyDrinkWater}>
          <img className={css.imgIcon} src={img} alt="icon item" />
          <p className={css.itemWhyDrinkWater}>Providing oxygen to the lungs</p>
        </li>
        <li className={css.itemOfListWhyDrinkWater}>
          <img className={css.imgIcon} src={img} alt="icon item" />
          <p className={css.itemWhyDrinkWater}>
            Maintaining the work of the heart
          </p>
        </li>
        <li className={css.itemOfListWhyDrinkWater}>
          <img className={css.imgIcon} src={img} alt="icon item" />
          <p className={css.itemWhyDrinkWater}>
            Release of processed substances
          </p>
        </li>
        <li className={css.itemOfListWhyDrinkWater}>
          <img className={css.imgIcon} src={img} alt="icon item" />
          <p className={css.itemWhyDrinkWater}>
            Ensuring the stability of the internal environment
          </p>
        </li>
        <li className={css.itemOfListWhyDrinkWater}>
          <img className={css.imgIcon} src={img} alt="icon item" />
          <p className={css.itemWhyDrinkWater}>
            Maintaining within the normal temperature
          </p>
        </li>
        <li className={css.itemOfListWhyDrinkWater}>
          <img className={css.imgIcon} src={img} alt="icon item" />
          <p className={css.itemWhyDrinkWater}>
            Maintaining an immune system capable of resisting disease
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WhyDrinkWater;
