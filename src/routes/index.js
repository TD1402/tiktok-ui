import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Uploat from '~/pages/Upload';

const publicRoutes = [
    //Routes ko can login van xem duoc
    { path: '/', compnent: Home },
    { path: '/following', compnent: Following },
    { path: '/profile', compnent: Profile },
    { path: '/upload', compnent: Uploat, layout: null },
];

const praviteRoute = [
    //Route can login moi xem duoc
];

export { praviteRoute, publicRoutes };
