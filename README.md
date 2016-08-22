# AppReleaseCountdown

JS app to countdown days until next release based on the date of some past (or future) release and the frequency you aim to deploy at. Live example [here](https://moowahaha.github.io/AppReleaseCountdown/?app_name[0]=Android&release_frequency[0]=7&base_freeze_date[0]=2016-08-10&base_release_date[0]=2016-08-16&app_name[1]=iOS&release_frequency[1]=24&base_freeze_date[1]=2016-08-03&base_release_date[1]=2016-08-08).

## Usage

Everything is defined in URL parameters. For example...

 `https://moowahaha.github.io/AppReleaseCountdown/?app_name[0]=Android&release_frequency[0]=7&base_freeze_date[0]=2016-08-10&base_release_date[0]=2016-08-16&app_name[1]=iOS&release_frequency[1]=24&base_freeze_date[1]=2016-08-03&base_release_date[1]=2016-08-08`

The parameters are...
 * `app_name[n]`: name of the app to be displayed.
 * `release_frequency[n]`: the number of days between releases.
 * `base_freeze_date[n]`: the date of a stable code freeze.
 * `base_release_date[n]`: the date of a stable release. 

Where `n` is a numeric index so you can display multiple releases. In the example above, '0' is Android and '1' is iOS.

This app calculates when the next release will be by using your `base_freeze_date` and `base_release_date` parameters and frequency. If you're really sticking to a stable release cadence, then you never need to change these parameters.