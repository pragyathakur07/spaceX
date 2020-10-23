export const constants = {
    yeardata: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
    title: 'SpaceX Launch Programs',
    devname: 'Pragya Thakur',
    filters: 'Filters',
    year: 'Launch Year',
    launch: 'Successful Launch',
    land: 'Successful Landing',
    reset: 'Reset Filters',
    initialurl: 'https://api.spacexdata.com/v3/launches?limit=100',
    launchurl: 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success={isLaunch}',
    launch_landurl: 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success={isLaunch}&land_success={isLand}',
    all: 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success={isLaunch}&land_success={isLand}&launch_year={isYear}'
}