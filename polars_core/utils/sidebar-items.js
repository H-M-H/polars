initSidebarItems({"fn":[["accumulate_dataframes_horizontal",""],["accumulate_dataframes_vertical",""],["get_supertype","Given two datatypes, determine the supertype that both types can safely be cast to"],["parallel_op_series","Simple wrapper to parallelize functions that can be divided over threads aggregated and finally aggregated in the main thread. This can be done for sum, min, max, etc."],["slice_offsets",""],["split_ca",""],["split_df",""],["split_series",""]],"struct":[["Arena",""],["NoNull","Just a wrapper structure. Useful for certain impl specializations This is for instance use to implement `impl<T> FromIterator<T::Native> for NoNull<ChunkedArray<T>>` as `Option<T::Native>` was already implemented: `impl<T> FromIterator<Option<T::Native>> for ChunkedArray<T>`"],["Node",""],["TrustMyLength",""],["Wrap",""]],"trait":[["CustomIterTools",""],["IntoVec",""]]});