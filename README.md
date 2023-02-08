
# Pokedex

1.) A React-Redux project using class components.

2.) In this project we will get Pokémons from an API and show it to the user, the user can select a Pokemon in order to see the details for that Pokemon.

3.) Pokemon can be added to his favourites in order to collect a list of Pokémons. We store this favourite list in redux persist, so that the user can come back to the website and the data is kept and persisted.





## API Reference

#### Get all items

```http
  GET https://pokeapi.co/api/v2/pokemon
```

#### Get item

```http
  GET https://pokeapi.co/api/v2/pokemon/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to fetch |


## Tech Stack

**Client:** React, Redux, Material UI


## Features

- Added a favourite button which turns red as soon as you click on it and the clicked pokemon gets added to favourite tab.



## Screenshots

![pok1](https://user-images.githubusercontent.com/97042529/217512641-d805793f-ba33-44b2-b35a-8ab2c4654997.png)


![poke2](https://user-images.githubusercontent.com/97042529/217513655-037be0f7-3106-4ef4-b847-0f4dbef3d746.png)

![poke3](https://user-images.githubusercontent.com/97042529/217514113-2366f23e-ef3b-4b2c-9e4b-f6beee22ad16.png)

![poke4](https://user-images.githubusercontent.com/97042529/217514289-03bd3c27-ac96-4dc9-97e0-b7d1aed2c6fb.png)
