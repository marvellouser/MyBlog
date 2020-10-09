
// import Root from '@page/index';
export default [
    {
        path: "/",
        component: '@/pages/index',
        exact: false,
        routes: [
            { path: '/book', component: '@/pages/Home/components/Book/index' }
        ]
    }
]