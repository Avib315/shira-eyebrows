interface IOrder {
    _id: string; // Unique identifier for the order
    customerInfo: {
        fullName: string,
        email: string,
        phone: string,
    }; // Identifier for the customer who placed the order
    items: Array<{
        _id: string; // Unique identifier for the item in the order
        mkt: string; 
        quantity: number; 
        price: number; 
    }>; 
    orderDate: Date; 
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    totalAmount: number;
    shippingAddress: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    }; 
    paymentMethod: 'credit_card' | 'paypal' | 'bank_transfer' | 'cash_on_delivery'; 
    paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
}

export default IOrder;
