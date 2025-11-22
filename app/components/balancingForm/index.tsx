import { BalancingFormProps } from "@/app/interfaces/bl.interface";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useForm } from "react-hook-form";

const BalancingForm = () => {
	const { register, handleSubmit } = useForm<BalancingFormProps>();
	const onSubmit = (data: BalancingFormProps) => {
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 z-10 backdrop-blur-md bg-black/10 p-6 rounded-2xl w-96 max-w-md'>
			<label className='flex flex-col gap-2'>
				Amount to Balance:
				<input type='number' {...register("amount", { required: true, min: 0 })} className='rounded-2xl border border-gray-300/20 p-2' />
			</label>
			<HoverBorderGradient
				style={{
					width: "100%",
				}}>
				Balance
			</HoverBorderGradient>
		</form>
	);
};

export default BalancingForm;
