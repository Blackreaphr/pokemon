import json

EVS = {
    "hp": 252,
    "atk": 0,
    "def": 128,
    "spa": 0,
    "spd": 128,
    "spe": 0
}

new_pokemon = [
    {"name": "Wobbuffet", "types": ["Psychic"], "stats": {"hp": 190, "atk": 33, "def": 58, "spa": 33, "spd": 58, "spe": 33}, "abilities": ["Shadow Tag"], "weight": 28.5},
    {"name": "Girafarig", "types": ["Normal", "Psychic"], "stats": {"hp": 70, "atk": 80, "def": 65, "spa": 90, "spd": 65, "spe": 85}, "abilities": ["Inner Focus"], "weight": 41.5},
    {"name": "Pineco", "types": ["Bug"], "stats": {"hp": 50, "atk": 65, "def": 90, "spa": 35, "spd": 35, "spe": 15}, "abilities": ["Sturdy"], "weight": 7.2},
    {"name": "Forretress", "types": ["Bug", "Steel"], "stats": {"hp": 75, "atk": 90, "def": 140, "spa": 60, "spd": 60, "spe": 40}, "abilities": ["Sturdy"], "weight": 125.8},
    {"name": "Dunsparce", "types": ["Normal"], "stats": {"hp": 100, "atk": 70, "def": 70, "spa": 65, "spd": 65, "spe": 45}, "abilities": ["Serene Grace"], "weight": 14.0},
    {"name": "Gligar", "types": ["Ground", "Flying"], "stats": {"hp": 65, "atk": 75, "def": 105, "spa": 35, "spd": 65, "spe": 85}, "abilities": ["Hyper Cutter"], "weight": 64.8},
    {"name": "Steelix", "types": ["Steel", "Ground"], "stats": {"hp": 75, "atk": 85, "def": 200, "spa": 55, "spd": 65, "spe": 30}, "abilities": ["Rock Head"], "weight": 400.0},
    {"name": "Snubbull", "types": ["Fairy"], "stats": {"hp": 60, "atk": 80, "def": 50, "spa": 40, "spd": 40, "spe": 30}, "abilities": ["Intimidate"], "weight": 7.8},
    {"name": "Granbull", "types": ["Fairy"], "stats": {"hp": 90, "atk": 120, "def": 75, "spa": 60, "spd": 60, "spe": 45}, "abilities": ["Intimidate"], "weight": 48.7},
    {"name": "Qwilfish", "types": ["Water", "Poison"], "stats": {"hp": 65, "atk": 95, "def": 85, "spa": 55, "spd": 55, "spe": 85}, "abilities": ["Poison Point"], "weight": 3.9},
    {"name": "Scizor", "types": ["Bug", "Steel"], "stats": {"hp": 70, "atk": 130, "def": 100, "spa": 55, "spd": 80, "spe": 65}, "abilities": ["Swarm"], "weight": 118.0},
    {"name": "Shuckle", "types": ["Bug", "Rock"], "stats": {"hp": 20, "atk": 10, "def": 230, "spa": 10, "spd": 230, "spe": 5}, "abilities": ["Sturdy"], "weight": 20.5},
    {"name": "Heracross", "types": ["Bug", "Fighting"], "stats": {"hp": 80, "atk": 125, "def": 75, "spa": 40, "spd": 95, "spe": 85}, "abilities": ["Swarm"], "weight": 54.0},
    {"name": "Sneasel", "types": ["Dark", "Ice"], "stats": {"hp": 55, "atk": 95, "def": 55, "spa": 35, "spd": 75, "spe": 115}, "abilities": ["Inner Focus"], "weight": 28.0},
    {"name": "Teddiursa", "types": ["Normal"], "stats": {"hp": 60, "atk": 80, "def": 50, "spa": 50, "spd": 50, "spe": 40}, "abilities": ["Pickup"], "weight": 8.8},
    {"name": "Ursaring", "types": ["Normal"], "stats": {"hp": 90, "atk": 130, "def": 75, "spa": 75, "spd": 75, "spe": 55}, "abilities": ["Guts"], "weight": 125.8},
    {"name": "Slugma", "types": ["Fire"], "stats": {"hp": 40, "atk": 40, "def": 40, "spa": 70, "spd": 40, "spe": 20}, "abilities": ["Magma Armor"], "weight": 35.0},
    {"name": "Magcargo", "types": ["Fire", "Rock"], "stats": {"hp": 60, "atk": 50, "def": 120, "spa": 80, "spd": 80, "spe": 30}, "abilities": ["Magma Armor"], "weight": 55.0},
    {"name": "Swinub", "types": ["Ice", "Ground"], "stats": {"hp": 50, "atk": 50, "def": 40, "spa": 30, "spd": 30, "spe": 50}, "abilities": ["Oblivious"], "weight": 6.5},
    {"name": "Piloswine", "types": ["Ice", "Ground"], "stats": {"hp": 100, "atk": 100, "def": 80, "spa": 60, "spd": 60, "spe": 50}, "abilities": ["Oblivious"], "weight": 55.8},
    {"name": "Corsola", "types": ["Water", "Rock"], "stats": {"hp": 55, "atk": 55, "def": 85, "spa": 65, "spd": 85, "spe": 35}, "abilities": ["Hustle"], "weight": 5.0},
    {"name": "Remoraid", "types": ["Water"], "stats": {"hp": 35, "atk": 65, "def": 35, "spa": 65, "spd": 35, "spe": 65}, "abilities": ["Hustle"], "weight": 12.0},
    {"name": "Octillery", "types": ["Water"], "stats": {"hp": 75, "atk": 105, "def": 75, "spa": 105, "spd": 75, "spe": 45}, "abilities": ["Suction Cups"], "weight": 28.5},
    {"name": "Delibird", "types": ["Ice", "Flying"], "stats": {"hp": 45, "atk": 55, "def": 45, "spa": 65, "spd": 45, "spe": 75}, "abilities": ["Vital Spirit"], "weight": 16.0},
    {"name": "Mantine", "types": ["Water", "Flying"], "stats": {"hp": 85, "atk": 40, "def": 70, "spa": 80, "spd": 140, "spe": 70}, "abilities": ["Swift Swim"], "weight": 220.0},
    {"name": "Skarmory", "types": ["Steel", "Flying"], "stats": {"hp": 65, "atk": 80, "def": 140, "spa": 40, "spd": 70, "spe": 70}, "abilities": ["Keen Eye"], "weight": 50.5},
    {"name": "Houndour", "types": ["Dark", "Fire"], "stats": {"hp": 45, "atk": 60, "def": 30, "spa": 80, "spd": 50, "spe": 65}, "abilities": ["Early Bird"], "weight": 10.8},
    {"name": "Houndoom", "types": ["Dark", "Fire"], "stats": {"hp": 75, "atk": 90, "def": 50, "spa": 110, "spd": 80, "spe": 95}, "abilities": ["Early Bird"], "weight": 35.0},
    {"name": "Kingdra", "types": ["Water", "Dragon"], "stats": {"hp": 75, "atk": 95, "def": 95, "spa": 95, "spd": 95, "spe": 85}, "abilities": ["Swift Swim"], "weight": 152.0},
    {"name": "Phanpy", "types": ["Ground"], "stats": {"hp": 90, "atk": 60, "def": 60, "spa": 40, "spd": 40, "spe": 40}, "abilities": ["Pickup"], "weight": 33.5},
    {"name": "Donphan", "types": ["Ground"], "stats": {"hp": 90, "atk": 120, "def": 120, "spa": 60, "spd": 60, "spe": 50}, "abilities": ["Sturdy"], "weight": 120.0},
    {"name": "Porygon2", "types": ["Normal"], "stats": {"hp": 85, "atk": 80, "def": 90, "spa": 105, "spd": 95, "spe": 60}, "abilities": ["Trace"], "weight": 32.5},
    {"name": "Stantler", "types": ["Normal"], "stats": {"hp": 73, "atk": 95, "def": 62, "spa": 85, "spd": 65, "spe": 85}, "abilities": ["Intimidate"], "weight": 71.2},
    {"name": "Smeargle", "types": ["Normal"], "stats": {"hp": 55, "atk": 20, "def": 35, "spa": 20, "spd": 45, "spe": 75}, "abilities": ["Own Tempo"], "weight": 58.0},
    {"name": "Tyrogue", "types": ["Fighting"], "stats": {"hp": 35, "atk": 35, "def": 35, "spa": 35, "spd": 35, "spe": 35}, "abilities": ["Guts"], "weight": 21.0},
    {"name": "Hitmontop", "types": ["Fighting"], "stats": {"hp": 50, "atk": 95, "def": 95, "spa": 35, "spd": 110, "spe": 70}, "abilities": ["Intimidate"], "weight": 48.0},
    {"name": "Smoochum", "types": ["Ice", "Psychic"], "stats": {"hp": 45, "atk": 30, "def": 15, "spa": 85, "spd": 65, "spe": 65}, "abilities": ["Oblivious"], "weight": 6.0},
    {"name": "Elekid", "types": ["Electric"], "stats": {"hp": 45, "atk": 63, "def": 37, "spa": 65, "spd": 55, "spe": 95}, "abilities": ["Static"], "weight": 23.5},
    {"name": "Magby", "types": ["Fire"], "stats": {"hp": 45, "atk": 75, "def": 37, "spa": 70, "spd": 55, "spe": 83}, "abilities": ["Flame Body"], "weight": 21.4},
    {"name": "Miltank", "types": ["Normal"], "stats": {"hp": 95, "atk": 80, "def": 105, "spa": 40, "spd": 70, "spe": 100}, "abilities": ["Thick Fat"], "weight": 75.5},
    {"name": "Blissey", "types": ["Normal"], "stats": {"hp": 255, "atk": 10, "def": 10, "spa": 75, "spd": 135, "spe": 55}, "abilities": ["Natural Cure"], "weight": 46.8},
    {"name": "Raikou", "types": ["Electric"], "stats": {"hp": 90, "atk": 85, "def": 75, "spa": 115, "spd": 100, "spe": 115}, "abilities": ["Pressure"], "weight": 178.0},
    {"name": "Entei", "types": ["Fire"], "stats": {"hp": 115, "atk": 115, "def": 85, "spa": 90, "spd": 75, "spe": 100}, "abilities": ["Pressure"], "weight": 198.0},
    {"name": "Suicune", "types": ["Water"], "stats": {"hp": 100, "atk": 75, "def": 115, "spa": 90, "spd": 115, "spe": 85}, "abilities": ["Pressure"], "weight": 187.0},
    {"name": "Larvitar", "types": ["Rock", "Ground"], "stats": {"hp": 50, "atk": 64, "def": 50, "spa": 45, "spd": 50, "spe": 41}, "abilities": ["Guts"], "weight": 72.0},
    {"name": "Pupitar", "types": ["Rock", "Ground"], "stats": {"hp": 70, "atk": 84, "def": 70, "spa": 65, "spd": 70, "spe": 51}, "abilities": ["Shed Skin"], "weight": 152.0},
    {"name": "Tyranitar", "types": ["Rock", "Dark"], "stats": {"hp": 100, "atk": 134, "def": 110, "spa": 95, "spd": 100, "spe": 61}, "abilities": ["Sand Stream"], "weight": 202.0},
    {"name": "Lugia", "types": ["Psychic", "Flying"], "stats": {"hp": 106, "atk": 90, "def": 130, "spa": 90, "spd": 154, "spe": 110}, "abilities": ["Pressure"], "weight": 216.0},
    {"name": "Ho-Oh", "types": ["Fire", "Flying"], "stats": {"hp": 106, "atk": 130, "def": 90, "spa": 110, "spd": 154, "spe": 90}, "abilities": ["Pressure"], "weight": 199.0},
    {"name": "Celebi", "types": ["Psychic", "Grass"], "stats": {"hp": 100, "atk": 100, "def": 100, "spa": 100, "spd": 100, "spe": 100}, "abilities": ["Natural Cure"], "weight": 4.0}
]

for p in new_pokemon:
    p["evs"] = EVS

with open('src/config/PokemonGen2.json') as f:
    data = json.load(f)

data['pokemon'].extend(new_pokemon)

with open('src/config/PokemonGen2.json', 'w') as f:
    json.dump(data, f, indent=2)
    f.write('\n')
