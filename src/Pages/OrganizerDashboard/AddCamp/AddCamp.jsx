import { useForm } from "react-hook-form"

const AddCamp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        console.log(data)
        console.log(data.image)
    }
    return (
        <div className="w-[80%]">
            <form onSubmit={handleSubmit(onSubmit)} noValidate="" className="space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="md:col-span-3">
                    <label htmlFor="name" className="text-sm">Camp name</label>
                    <input {...register("campName")} id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="date" className="text-sm">Date</label>
                    <input {...register("date")} id="date" type="date" className="w-full p-3 rounded dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="fee" className="text-sm">Camp fee</label>
                    <input {...register("campFees")} id="fee" type="number" className="w-full p-3 rounded dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="location" className="text-sm">Location</label>
                    <input {...register("location")} id="location" type="text" className="w-full p-3 rounded dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="healthcare professional name" className="text-sm">Healthcare professional name</label>
                    <input {...register("healthcareProfessional")} id="health-care" type="text" className="w-full p-3 rounded dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="Participant Count" className="text-sm">Participant Count</label>
                    <input {...register("participantCount")} id="Participant-Count" type="number" className="w-full p-3 rounded dark:bg-gray-100" defaultValue={0} />
                </div>
                <div className="md:col-span-3">
                    <label htmlFor="description" className="text-sm">Description</label>
                    <textarea {...register("description")} id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
                </div>
                <div>
                    <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                </div>
                <button  type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-[#181ca3] dark:text-gray-50 md:col-span-3">Send Message</button>
            </form>
        </div>
    );
};

export default AddCamp;