import config from "@/config"

export const createUrlStorage = (id: string, size: 200| 50| 525 , dir: "users" | "public") => {
    return config.API_URL+"/storage/"+dir+"/"+size+"x"+size+"/"+id
}