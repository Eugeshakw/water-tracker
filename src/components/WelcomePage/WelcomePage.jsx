import css from './WelcomePage.module.css';
import calendar from './icons/calendar.svg';
import statistic from './icons/statistic.svg';
import settings from './icons/settings.svg';

const WelcomePage = function () {
  return (
    <div className="front">
      <h1 className="title">Water consumption tracker</h1>
      <h2 className="title-record">Record daily water intake and track</h2>
      <p className="benefits">Tracker Benefits</p>
      <div className="water">
        <ul>
          <img className={css.imgIcon} src={calendar} alt="calendar icon" />
          <li className="benefits-item">Habit drive</li>
          <img className={css.imgIcon} src={statistic} alt="statistic icon" />
          <li className="benefits-item">View statistics</li>
          <img className={css.imgIcon} src={settings} alt="settings icon" />
          <li className="benefits-item">Personal rate setting</li>
        </ul>
        <button className="try" type="button">
          Try tracker
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
