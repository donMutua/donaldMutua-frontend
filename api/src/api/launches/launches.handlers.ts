import axios from "axios";
import { Response, Request } from "express";

export async function getAllLaunches(req: Request, res: Response) {
  try {
    const launches = await axios.get("https://api.spacexdata.com/v4/launches");
    res.status(200).send(launches.data);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function getOneLaunch(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const launch = await axios.get(
      `https://api.spacexdata.com/v4/launches/${id}`
    );
    res.status(200).send(launch.data);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
