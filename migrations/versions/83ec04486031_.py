"""empty message

Revision ID: 83ec04486031
Revises: 4265aa214e0f
Create Date: 2023-08-29 17:55:34.401219

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '83ec04486031'
down_revision = '4265aa214e0f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('id',
               existing_type=sa.INTEGER(),
               type_=sa.Float(),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('id',
               existing_type=sa.Float(),
               type_=sa.INTEGER(),
               existing_nullable=False)

    # ### end Alembic commands ###