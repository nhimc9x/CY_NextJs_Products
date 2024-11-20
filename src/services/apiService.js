import axiosInstance from "@/configs/axiosConfig";

export const GET = async (url, params) => await axiosInstance.get(url, {params})

export const POST = async (url, data) => await axiosInstance.post(url, data)
