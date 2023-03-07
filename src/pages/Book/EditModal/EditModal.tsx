import { Button, Card, FormControl, Input, Modal } from "@components/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { ValidationBookSchema, validationBookSchema } from "@schema/book";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Book } from "@type/book";
import styles from "EditModal.module.scss";
import { useGlobalStateContext } from "provider/GlobalStateProvider";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { postBook } from "services/book.service";

function EditModal() {
  const { state, setModal, selectedModal } = useGlobalStateContext();
  const queryClient = useQueryClient();
  const book = state.data as Book;
  const { isLoading, mutate: update } = useMutation(
    (body: unknown) => postBook(body, book.id),
    {
      onSuccess(data) {
        setModal("editBook", false, null);
        queryClient.invalidateQueries(["books"]);
      },
      onError(error) {},
    }
  );
  const isShow = selectedModal("editBook");

  const {
    setError,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ValidationBookSchema>({
    resolver: zodResolver(validationBookSchema),
  });

  useEffect(() => {
    setValue("title", book?.attributes?.title);
    setValue("content", book?.attributes?.content);
    setValue("price", book?.attributes?.price);
  }, [state]);

  const onSubmit: SubmitHandler<ValidationBookSchema> = (data) => {
    const updateBook = {
      data: {
        title: data.title,
        price: data.price,
        content: data.content,
      },
    };

    update(updateBook);
  };
  return (
    <Modal.Root
      onClose={() => setModal("editBook", false, null)}
      isShow={isShow}
      className="!w-[500px]"
    >
      <Modal.Header className="font-semibold tẽ">Edit Book</Modal.Header>
      <Modal.Content className="flex flex-col gap-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <FormControl
            error={errors?.title?.message && <p>{errors?.title?.message}</p>}
            label="title"
            htmlFor="title"
          >
            <Input
              error={!!errors?.title?.message}
              type="text"
              {...register("title")}
            />
          </FormControl>
          <FormControl
            label="Content"
            htmlFor="content"
            error={
              errors?.content?.message && <p>{errors?.content?.message}</p>
            }
          >
            <Input
              error={!!errors?.content?.message}
              type="text"
              {...register("content")}
            />
          </FormControl>

          <FormControl
            label="Price"
            htmlFor="price"
            error={errors?.price?.message && <p>{errors?.price?.message}</p>}
          >
            <Input
              error={!!errors?.price?.message}
              {...register("price", {
                valueAsNumber: true,
              })}
            />
          </FormControl>

          {/* {errors?.submit?.message && (
            <p className="text-xs mt-1 mb-0 text-[color:var(--color-ec5956)]">
              {errors?.submit?.message}
            </p>
          )} */}

          <Button
            // disabled={isLoading}
            type="submit"
            className="!text-lg"
            variant="primary"
          >
            Update
          </Button>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
}

export default EditModal;
