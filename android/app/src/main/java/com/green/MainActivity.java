package com.green;

import com.facebook.react.ReactActivity;
/**
 * Imports below are added 
 * @by David Derrick Anyuru
 */
import android.os.Bundle;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "green";
  }

  /**
  * Configuration added
  * @by David Derrick Anyuru
  * @date 2022-02-23
  * @time 16:26:00
  */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}
