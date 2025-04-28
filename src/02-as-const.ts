const routes = {
    home: '/',
    users: '/users',
    admin: '/admin',
    auth: '/sign-in'
} as const;

type Routes = typeof routes;
type RouteKey = keyof Routes;
type Route = Routes[RouteKey];

const goToRoute = (route: Route) => {
    //
};

goToRoute('/admin');

// Enums
// enum NotificationLevel {
//     Notice,
//     Warning,
//     Error,
//     Success
// }

// const level = NotificationLevel.Warning;

const notificationLevels = ['notice', 'warning', 'error', 'success'] as const;
type NotificationLevel = (typeof notificationLevels)[number];

const sendNotification = (message: string, level: NotificationLevel) => {
    //
};

sendNotification('You have been signed in!', 'success');
