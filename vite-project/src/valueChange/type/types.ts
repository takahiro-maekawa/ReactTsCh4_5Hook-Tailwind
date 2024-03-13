export enum Attribute {
    Dark = "Dark", 
    Light = "Light", 
    Earth = "Earth", 
    Water = "Water", 
    Fire = "Fire", 
    Wind = "Wind"
}

export type CardValueState = {
    attribute: Attribute;
    rank: number;
    loading: boolean;
  };

export type CardValueAction = 
    |
    {
        type: 'initalize';  
    }
    |{
        type: 'changeAttr';
        attribute: Attribute;
    }
    |{
        type: 'increment';
    }
    |{
        type: 'decrement';
    };