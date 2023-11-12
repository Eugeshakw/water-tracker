import css from './DaysGeneralStats.module.css';

const DaysGeneralStats = function ({
  dateOfMonth,
  dailyNorma,
  fullfilmentOfDailyNorma,
  howManyServings,
}) {
  return (
    <div className={css.divDaysGeneralStats}>
      <p className={css.dateOfMonthParagrah}>{dateOfMonth}</p>
      <p className={css.dailyNormaParagrah}>
        Daily norma: <span className={css.dailyNormaSpan}>{dailyNorma}</span>
      </p>
      <p className={css.fullfilmentParagrah}>
        Fulfillment of the daily norm:
        <span className={css.fullfilmentSpan}>{fullfilmentOfDailyNorma}</span>
      </p>
      <p className={css.howManyServingsParagrah}>
        How many servings of water:
        <span className={css.howManyServingsSpan}>{howManyServings}</span>
      </p>
    </div>
  );
};
