export const typeDefs = `#graphql
  type MarginAlert {
    volumeRange: String!
    message: String!
  }

  type PricingRule {
    id: Int!
    plantId: Int!
    clientType: String!
    clientName: String
    costPerColor: Float!
    linkPricing: String!
    
    margin300kg: Float!
    margin500kg: Float!
    margin1T: Float!
    margin3T: Float!
    margin5T: Float!
    margin10T: Float!
    margin20T: Float!
    margin30T: Float!
    
    alerts: [MarginAlert!]!
  }

  input PricingRuleInput {
    plantId: Int!
    clientType: String!
    clientName: String
    costPerColor: Float!
    linkPricing: String!
    
    margin300kg: Float!
    margin500kg: Float!
    margin1T: Float!
    margin3T: Float!
    margin5T: Float!
    margin10T: Float!
    margin20T: Float!
    margin30T: Float!
  }

  input UpdatePricingRuleInput {
    clientType: String
    clientName: String
    costPerColor: Float
    linkPricing: String
    
    margin300kg: Float
    margin500kg: Float
    margin1T: Float
    margin3T: Float
    margin5T: Float
    margin10T: Float
    margin20T: Float
    margin30T: Float
  }

  type Plant {
    id: Int!
    name: String!
  }

  type Query {
    plants: [Plant!]!
    pricingRules(plantId: Int!): [PricingRule!]!
  }

  type Mutation {
    createPricingRule(input: PricingRuleInput!): PricingRule!
    updatePricingRule(id: Int!, input: UpdatePricingRuleInput!): PricingRule!
  }
`;
