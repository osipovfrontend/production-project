import { classNames } from "shared/lib/classNames/classNames"
import cls from './CommentList.module.scss'
import { Comment } from "entities/Comment/model/types/comment";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";
import { Text } from "shared/ui/Text/Text";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = ({ className, isLoading, comments }: CommentListProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? comments.map(comment => (
                <CommentCard
                    isLoading={isLoading}
                    className={cls.comment}
                    comment={comment}
                />
            )) : <Text title={t('Комментарии отсутствуют')} />}
        </div>
    )
}