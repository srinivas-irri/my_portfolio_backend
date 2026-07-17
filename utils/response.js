export const successResponse = (data) => {

    return {
        success: true,
        data,
        timestamp: new Date().toISOString()
    };

};

export const errorResponse = (message) => {

    return {
        success: false,
        message,
        timestamp: new Date().toISOString()
    };

};