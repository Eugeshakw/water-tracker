import css from './DaysGeneralStats.module.css';
import img from '../DaysGeneralStats/icons/button_svg.svg';

const DaysGeneralStats = function ({
  dateOfMonth,
  dailyNorma,
  fullfilmentOfDailyNorma,
  howManyServings,
}) {
  return (
    <div className={css.divDaysGeneralStats}>
      <div className={css.dateOfMonthGroup}>
        <p className={css.dateOfMonthParagrah}>{dateOfMonth}</p>
        <button className={css.buttonClose}>
          <img className={css.imgButtonClose} src={img} alt="button icon" />
        </button>
      </div>
      <p className={css.dailyNormaParagrah}>
        Daily norma: <span className={css.dailyNormaSpan}>{dailyNorma}</span>
      </p>
      <p className={css.fullfilmentParagrah}>
        Fulfillment of the daily norm:{' '}
        <span className={css.fullfilmentSpan}>{fullfilmentOfDailyNorma}</span>
      </p>
      <p className={css.howManyServingsParagrah}>
        How many servings of water:{' '}
        <span className={css.howManyServingsSpan}>{howManyServings}</span>
      </p>
    </div>
  );
};

export default DaysGeneralStats;
