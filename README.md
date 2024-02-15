> [!IMPORTANT]
> This small project is under development and it's not working yet

# Piliry
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=K0nek0n_Piliry&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=K0nek0n_Piliry)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=K0nek0n_Piliry&metric=bugs)](https://sonarcloud.io/summary/new_code?id=K0nek0n_Piliry)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=K0nek0n_Piliry&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=K0nek0n_Piliry)

A little project with plain html, css, js for a picture library, that uses a specific folder structure and json files for loading pictures and generating a library. It's as simple as it sounds :)

## Folder structure
An example of what a folder structure could look like:
```
.
├── ...                       # Project files
├── boards                    # Multiple Boards
│   ├── First Board           # Board 1
│   │   ├── image_abc.png     # A sample image
│   │   ├── preview.png       # Preview image of the Board
│   │   ├── config.json       # For changing Name, Description and preview image
│   ├── Second Board          # Board 2
│   │   ├── image_bcd.png     # A sample Image
│   │   ├── preview.png       # Preview image of the Board
│   │   ├── config.json       # For changing Name, Description and preview image
│   └── ...                   # etc.
...
```
## TODO
Just a few steps I want to generally complete for this project
#### Main Page
- [x] General HTML & CSS
- [ ] Working loading boards on main page
- [ ] Clicking on boards are redirecting to board
- [ ] CSS fine-tuning and "animations"
#### Board Page
- [ ] General HTML & CSS
- [ ] Load site with url arguments (`...?board=first_board`)
- [ ] Load every image in directory
- [ ] Make Images clickable for full size view
- [ ] CSS fine-tuning and "animations"
