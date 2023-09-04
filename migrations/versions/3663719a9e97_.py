"""empty message

Revision ID: 3663719a9e97
Revises: 2512c8da9c7e
Create Date: 2023-09-03 16:31:59.195668

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3663719a9e97'
down_revision = '2512c8da9c7e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('groomer', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=1000),
               existing_nullable=False)

    with op.batch_alter_table('vet', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=200),
               type_=sa.String(length=1000),
               existing_nullable=False)

    with op.batch_alter_table('walker', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=50),
               type_=sa.String(length=1000),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('walker', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.String(length=1000),
               type_=sa.VARCHAR(length=50),
               existing_nullable=False)

    with op.batch_alter_table('vet', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.String(length=1000),
               type_=sa.VARCHAR(length=200),
               existing_nullable=False)

    with op.batch_alter_table('groomer', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.String(length=1000),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)

    # ### end Alembic commands ###