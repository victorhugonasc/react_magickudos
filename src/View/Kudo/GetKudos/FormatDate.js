export default function formatDate(date) {
    const currentDate = new Date();
    var kudoDate = new Date(date);

    // date example: 2020-06-03T14:18:05.362+0000
    const diff = currentDate.getTime() - kudoDate.getTime();
    const minutesInMili = 1000 * 60;
    const hoursInMili = minutesInMili * 60;
    const daysInMili = hoursInMili * 24;
    const monthsInMili = daysInMili * 30;
    const yearsInMili = monthsInMili * 365;

    if (diff > yearsInMili) {

        let timeYears = Math.round( diff / yearsInMili );

        if (timeYears === 1) {
            return `${timeYears} year ago`;
        }
        return `${timeYears} years ago`;
    }

    if (diff > monthsInMili) {

        let timeMonths = Math.round( diff / monthsInMili );

        if (timeMonths === 1) {
            return `${timeMonths} month ago`;
        }
        return `${timeMonths} months ago`;
    }

    if (diff > daysInMili) {

        let timeDays = Math.round( diff / daysInMili );

        if (timeDays === 1) {
            return `${timeDays} day ago`;
        }
        return `${timeDays} days ago`;
    }

    if (diff > hoursInMili) {

        let timeHours = Math.round( diff / hoursInMili );

        if (timeHours === 1) {
            return `${timeHours} hour ago`;
        }
        return `${timeHours} hours ago`;
    }

    if (diff > minutesInMili) {

        let timeMinutes = Math.round( diff / minutesInMili );

        if (timeMinutes === 1) {
            return `${timeMinutes} minute ago`;
        }
        return `${timeMinutes} minutes ago`;
    }

    
    let timeSeconds = Math.round(diff / 1000);
    
    if (timeSeconds === 1) {
        return `${timeSeconds} second ago`;
    }

    return `${timeSeconds} seconds ago`;

}