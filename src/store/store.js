import { sortedDays } from '../helpers/getWeekDays';

const initialState = {
  deals: [],
  days: sortedDays(),
  pauseCount: 0,
  countDoneDeals: 0,
  date: String(new Date().getTime()),
  weekSort:  {
    value: 'Эта неделя',
    label: 'Эта неделя'
  }
}

export const ADD_DEAL = 'ADD_DEAL';
export const addDeal = (dealObj) => ({
  type: ADD_DEAL,
  deal: {
    count: 1,
    text: dealObj.text,
    time: dealObj.time,
    index: dealObj.index
  },
});

export const REMOVE_DEAL = 'REMOVE_DEAL';
export const removeDeal = (index) => ({
  type: REMOVE_DEAL,
  index
});

export const UPTIME_DEAL = 'UPTIME_DEAL';
export const uptimeDeal = (index) => ({
  type: UPTIME_DEAL,
  index
});

export const DOWNTIME_DEAL = 'DOWNTIME_DEAL';
export const downtimeDeal = (index) => ({
  type: DOWNTIME_DEAL,
  index
});

export const UPDATE_DEAL = 'UPDATE_DEAL';
export const updateDeal = (index, text) => ({
  type: UPDATE_DEAL,
  text,
  index
});

export const ADD_TIME = 'ADD_TIME';
export const addTime = (time) => ({
  type: ADD_TIME,
  time
});

export const ADD_PAUSE_TIME = 'ADD_PAUSE_TIME';
export const addPauseTime = (time) => ({
  type: ADD_PAUSE_TIME,
  time
});

export const ADD_PAUSE_COUNT = 'ADD_PAUSE_COUNT';
export const addPauseCount = (number) => ({
  type: ADD_PAUSE_COUNT,
  number
});

export const ADD_DONE_DEAL = 'ADD_DONE_DEAL';
export const addDoneDeal = (number) => ({
  type: ADD_DONE_DEAL,
  number
});

export const ADD_NEW_WEEKDAY = 'ADD_NEW_WEEKDAY';
export const addNewWeekDay = (array) => ({
  type: ADD_NEW_WEEKDAY,
  array
});

export const CHANGE_DATE = 'CHANGE_DATE';
export const changeDate = (date) => ({
  type: CHANGE_DATE,
  date
});

export const CHANGE_WEEK = 'CHANGE_WEEK';
export const changeWeek = (obj) => ({
  type: CHANGE_WEEK,
  obj
});

export const SWITCH_DEALS = 'SWITCH_DEALS';
export const switchDeals = (index) => ({
  type: SWITCH_DEALS,
  index
});

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_DEALS:
      return {
        ...state,
        deals: [...state.deals.slice(action.index, action.index+1), ...state.deals.slice(0, action.index), ...state.deals.slice(action.index+1,)]
      }
    case CHANGE_WEEK:
      return {
        ...state,
        weekSort: action.obj
      };
    case CHANGE_DATE:
      return {
        ...state,
        date: action.date
      };
    case ADD_DEAL:
      return {
        ...state,
        deals: [...state.deals, action.deal],
      };
    case ADD_NEW_WEEKDAY:
      return {
        ...state,
        days: [...state.days.slice(1, 21), ...state.days.slice(0, 1)]
      }
    case REMOVE_DEAL:
      return {
        ...state,
        deals: state.deals.filter((deal, index) => index !== action.index)
      };
    case UPTIME_DEAL:
      return {
        ...state,
        deals: state.deals.map((deal, index) => (index === action.index) ?  {...deal, count: deal.count+1 }: deal)
      };
    case DOWNTIME_DEAL:
      return {
        ...state,
        deals: state.deals.map((deal, index) => (index === action.index && deal.count > 1) ?  {...deal, count: deal.count-1 }: deal)
      };
    case UPDATE_DEAL:
      return {
        ...state,
        deals: state.deals.map((deal, index) => (index === action.index) ?  {...deal, text: action.text } : deal)
      };
    case ADD_TIME:
      return {
        ...state,
        days: state.days.map((day, index) => (index === 20) ? {...day, time: day.time + action.time } : day )
      }
    case ADD_PAUSE_TIME:
      return {
        ...state,
        days: state.days.map((day, index) => (index === 20) ? {...day, pauseTime: day.pauseTime + action.time } : day )
      }
    case ADD_PAUSE_COUNT:
      return {
        ...state,
        pauseCount: state.pauseCount + action.number
      }
    case ADD_DONE_DEAL:
      return {
        ...state,
        countDoneDeals: state.countDoneDeals + action.number
      }
    default:
      return state;
  }
}
