# AppReleaseCountdown

Little app to display app code freeze and release.

## Usage

It's just a static website with some JS. Everything is defined in URL parameters. For example...

 `http://whatever.com?app_name[0]=Android&release_frequency[0]=14&base_freeze_date[0]=2015-12-23&base_release_date[0]=2016-08-08&app_name[1]=iOS&release_frequency[1]=24&base_freeze_date[1]=2015-12-23&base_release_date[1]=2015-12-25`

The parameters are...
 * app_name[n]: name of the app to be displayed.
 * release_frequency[n]: the number of days between releases.
 * base_freeze_date[n]: the date of a stable code freeze.
 * base_release_date[n]: the date of a stable release. 

Where 'n' is an index, so you can display multiple apps. In the example above, '0' is Android and '1' is iOS.

