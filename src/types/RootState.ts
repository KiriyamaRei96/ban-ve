import { AppState } from 'app/pages/App/slice/types';
import { BookingState } from 'app/pages/Booking/slice/types';
import { CheckOutState } from 'app/pages/CheckOut/slice/types';
import { ThemeState } from 'styles/theme/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  notifications: any;
  theme?: ThemeState;
  app: AppState;
  booking?: BookingState;
  checkOut?: CheckOutState;

  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
