export const typeDefs = `#graphql
    # Custom object types
    type User {
        id: ID!
        username: String!
        name: String!
        cards: String!
        balance: Float!
        orders: [Order!]
    }
    type Driver {
        id: ID!
        username: String!
        name: String!
        car: String!
        orders: [Order!]
        status: String!
    }
    # TODO: Add a schema for orders!
    type Order{
        id: ID!
        name: String!
        restaurant: String!
        quantity: Int!
        instructions: String
        cost: Float!
        owner: String!
        number: Int
        status: String!
        driver: String
    }

    # Queries for requesting data
    type Query {
        users: [User]
        user(id: ID!): User
        # TODO: Add in queries for ALL orders and a specific order by id!

        orders: [Order]
        order(id: ID!): Order

        drivers: [Driver]
        driver(id: ID!): Driver
        # TODO: Add a query for orders by restaurant
        orderRestaurant(restaurant: String!): [Order]
    }
    # Mutations for modification of data
    type Mutation {
        placeOrder(order: OrderInput!): Order!
        # TODO: Define a mutation for accepting an order as a driver
        takeOrder(accept: AcceptInput): Driver!
    }
    # Special Input Types
    input OrderInput {
        name: String!
        restaurant: String!
        quantity: Int!
        instructions: String
        cost: Float!
        owner: String!
    }
    # TODO: Define a custom input type for accepting an order
    input AcceptInput {
        orderID: ID!
        driverID: ID!
    }
`