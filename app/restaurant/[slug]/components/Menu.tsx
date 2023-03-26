import { Item } from "@prisma/client";
import MenuCard from "./MenuCard";

interface Props {
  menus: Item[]
}

export default function Menu({ menus }: Props) {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        {menus.length ?
          (<div className="flex flex-wrap justify-between">
            {menus.map((item) =>
              <MenuCard key={item.id} item={item} />
            )
            }
          </div>)
          :
          (<div className="flex flex-wrap justify-between">
            <p>This restaurant does not have a menu</p>
          </div>)
        }
      </div>
    </main>
  )
}
