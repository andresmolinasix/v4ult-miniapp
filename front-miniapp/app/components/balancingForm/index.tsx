import { BalancingFormProps } from "@/app/interfaces/bl.interface";
// import { EncryptedText } from "@/components/ui/encrypted-text";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useForm } from "react-hook-form";
import { useWriteContract } from "wagmi";
import { MANAGER } from "../../../artifacts";
import { toast } from "sonner";

const BalancingForm = () => {
	const { register, handleSubmit } = useForm<BalancingFormProps>();

	const { writeContractAsync, isPending } = useWriteContract();

	const onSubmit = (data: BalancingFormProps) => {
		toast.promise(
			writeContractAsync({
				abi: MANAGER.abi,
				address: MANAGER.address as `0x${string}`,
				functionName: "deposit",
				args: [BigInt(data.amount), 0],
			}),
			{
				loading: "Balancing in progress...",
				success: "Balance successful!",
				error: (err) => {
					console.error(err);
					return `Balance failed: ${err.message}`;
				},
			}
		);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 z-10 backdrop-blur-md bg-black/10 p-6 rounded-2xl w-96 max-w-md'>
			<label className='flex flex-col gap-2'>
				Amount to Balance:
				<input type='number' {...register("amount", { required: true, min: 0 })} className='rounded-2xl border border-gray-300/20 p-2' />
			</label>
			{!isPending ? (
				<HoverBorderGradient
					aria-disabled={isPending}
					style={{
						width: "100%",
					}}>
					Balance
				</HoverBorderGradient>
			) : (
				<h2>Sumbitting balance...</h2>
			)}
		</form>
	);
};

export default BalancingForm;
