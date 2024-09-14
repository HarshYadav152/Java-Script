if (process.env.NODE_ENV === 'development') {
    console.log('Running in development mode');
} else if (process.env.NODE_ENV === 'production') {
    console.log('Running in production mode');
} else {
    console.log('Node environment is not set or unrecognized');
}
